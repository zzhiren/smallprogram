import React from 'react';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { View, Canvas, Image } from '@tarojs/components';
import Icon from '../icon';
export default class ImageCropper extends React.Component {
    constructor(props) {
        super(props);
        /* 系统信息 */
        this.systemInfo = Taro.getSystemInfoSync();
        /* 是否结束触摸 */
        this.endTouch = true;
        /* 鼠标和图片中心的相对位置 */
        this.touchImageRelative = [];
        /* 双指触摸时斜边长度 */
        this.hypotenuseLength = 0;
        /* canvas 是否在屏幕可视范围外 */
        this.canvasOverflow = true;
        /* setCenter timer */
        this.setCenterTimer = null;
        this.localPath = '';
        /**
         * @desc 初始化
         * @private
         */
        this.init = async (imagePath) => {
            this.setState({
                imagePath
            });
            await this.computeCutBoxSize();
            imagePath && this.initImageSize(imagePath);
            this.initCanvas();
        };
        /**
         * @desc 初始化图片size
         * @param src
         */
        this.initImageSize = (src) => {
            const { windowWidth, windowHeight } = this.systemInfo;
            const { cutBoxWidth, scale, imagePath } = this.state;
            Taro.getImageInfo({
                src: src || imagePath
            }).then(async (res) => {
                let width;
                let height;
                let minScale;
                /* 图片高度/图片宽度 = 可视区域高度/可视区域宽度 */
                /* 可视区域宽度 = 可视区域高度 * 图片宽度 / 图片高度 */
                /* width = windowHeight * res.width / res.height */
                if (res.height > res.width) {
                    width = windowHeight * res.width / res.height;
                    height = windowHeight;
                    minScale = cutBoxWidth / width;
                }
                else {
                    width = windowWidth;
                    height = windowWidth * res.height / res.width;
                    minScale = cutBoxWidth / height;
                }
                this.localPath = res.path;
                await this.setState({
                    originalImageWidth: width,
                    originalImageHeight: height,
                    imageWidth: width * scale,
                    imageHeight: height * scale,
                    canvasHeight: height,
                    canvasWidth: width,
                    minScale
                });
                this.setCenter();
            });
        };
        /**
         * @desc 初始化canvas
         */
        this.initCanvas = () => {
            if (!this.canvasContext)
                this.canvasContext = Taro.createCanvasContext(this.state.canvasId, this);
        };
        /**
         * @desc 居中
         */
        this.setCenter = () => {
            const { windowWidth, windowHeight } = this.systemInfo;
            const { imageWidth, imageHeight } = this.state;
            this.setState({
                imageTop: (windowHeight - imageHeight) / 2,
                imageLeft: (windowWidth - imageWidth) / 2,
            });
        };
        /**
         * @desc 重置图片位置和大小
         */
        this.refresh = () => {
            const { originalImageWidth, originalImageHeight } = this.state;
            this.setState({
                imageWidth: originalImageWidth,
                imageHeight: originalImageHeight,
                scale: 1
            }, () => {
                this.setCenter();
            });
        };
        /**
         * @desc 预览剪裁的图片
         */
        this.previewImage = async () => {
            await this.draw();
            await this.generateImage();
            Taro.previewImage({
                current: this.state.canvasImage,
                urls: [this.state.canvasImage]
            }).then(res => {
            }).catch(err => {
                console.log(err);
            });
        };
        /**
         * @desc 选择本地图片剪裁
         */
        this.chooseImage = () => {
            Taro.chooseImage({
                count: 1,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera']
            }).then(res => {
                console.log(res);
                this.setState({
                    imagePath: res.tempFilePaths[0]
                }, () => {
                    this.initImageSize(res.tempFilePaths[0]);
                });
            });
        };
        /**
         * @desc 渲染canvas
         * @private
         */
        this.draw = async () => {
            /* 计算缩放后的图片宽高差 */
            return new Promise((resolve, reject) => {
                const { scale, imageLeft, imageTop, imageWidth, imageHeight, cutBoxLeft, cutBoxTop, } = this.state;
                const differenceWidth = imageWidth * scale - imageWidth;
                const differenceHeight = imageHeight * scale - imageHeight;
                const xPos = imageLeft - differenceWidth / 2 - cutBoxLeft;
                const yPos = imageTop - differenceHeight / 2 - cutBoxTop;
                this.canvasContext.drawImage(this.localPath, xPos, yPos, imageWidth * scale, imageHeight * scale);
                // @ts-ignore
                this.canvasContext.draw(false, setTimeout(() => {
                    resolve(true);
                }, 500));
            });
        };
        /**
         * @desc canvas生成图片
         */
        this.generateImage = async (success = false) => {
            const { cutBoxWidth, cutBoxHeight, canvasId } = this.state;
            const { pixelRatio } = this.systemInfo;
            return new Promise((resolve, reject) => {
                Taro.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    width: cutBoxWidth,
                    height: cutBoxHeight,
                    destWidth: cutBoxWidth * pixelRatio,
                    destHeight: cutBoxHeight * pixelRatio,
                    canvasId
                }).then(res => {
                    console.log(res.tempFilePath);
                    if (success) {
                        this.props.success && this.props.success(res.tempFilePath);
                    }
                    this.setState({
                        canvasImage: res.tempFilePath
                    }, () => {
                        resolve(res);
                    });
                }).catch(err => {
                    reject(err);
                });
            });
        };
        /**
         * @desc 计算裁剪框的宽高
         */
        this.computeCutBoxSize = async () => {
            const { windowWidth, windowHeight } = this.systemInfo;
            const { size } = this.props;
            let width = 0;
            if (typeof size === 'string' && size.indexOf('%')) {
                width = windowWidth * (Number(size.replace('%', '')) / 100);
            }
            return new Promise((resolve, reject) => {
                this.setState({
                    cutBoxWidth: width,
                    cutBoxHeight: width,
                    cutBoxTop: (windowHeight - width) / 2,
                    cutBoxBottom: (windowHeight - width) / 2,
                    cutBoxLeft: (windowWidth - width) / 2,
                    cutBoxRight: (windowWidth - width) / 2
                }, () => {
                    resolve(null);
                });
            });
        };
        /**
         * @desc 图片触摸事件开始监听
         * @param e
         */
        this.imageOnTouchStart = (e) => {
            this.endTouch = false;
            const { imageWidth, imageHeight, scale } = this.state;
            if (e.touches.length === 1) {
                /* 单指拖动 */
                const differenceWidth = imageWidth * scale - imageWidth;
                const differenceHeight = imageHeight * scale - imageHeight;
                this.touchImageRelative[0] = {
                    x: e.touches[0].clientX - this.state.imageLeft + differenceWidth / 2,
                    y: e.touches[0].clientY - this.state.imageTop + differenceHeight / 2,
                };
            }
            else {
                /* 双指放大 */
                /* 计算双指的 x y 轴坐标差 */
                const width = Math.abs(e.touches[0].clientX - e.touches[1].clientX);
                const height = Math.abs(e.touches[0].clientY - e.touches[1].clientY);
                this.touchImageRelative = [
                    {
                        x: e.touches[0].clientX - this.state.imageLeft,
                        y: e.touches[0].clientY - this.state.imageTop
                    },
                    {
                        x: e.touches[1].clientX - this.state.imageLeft,
                        y: e.touches[1].clientY - this.state.imageTop
                    }
                ];
                this.hypotenuseLength = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
            }
            !this.canvasOverflow && this.draw();
        };
        /**
         * @desc 图片触摸移动事件监听
         * @param e
         */
        this.imageOnTouchMove = (e) => {
            console.log('imageOnTouchMove');
            if (this.endTouch)
                return;
            const { minScale } = this.state;
            if (e.touches.length === 1) {
                /* 单指拖动 */
                let top = 0;
                let left = 0;
                top = e.touches[0].clientY - this.touchImageRelative[0].y;
                left = e.touches[0].clientX - this.touchImageRelative[0].x;
                this.imageEdgeDetection(top, left);
            }
            else {
                /* 双指缩放 */
                const width = (Math.abs(e.touches[0].clientX - e.touches[1].clientX));
                const height = (Math.abs(e.touches[0].clientY - e.touches[1].clientY));
                const hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
                let scale = this.state.scale * ((hypotenuse - 2) / this.hypotenuseLength);
                scale = scale < minScale ? minScale : scale;
                this.setState({
                    scale
                });
            }
        };
        /**
         * @desc 图片触摸事件结束监听
         */
        this.imageOnTouchEnd = () => {
            this.endTouch = true;
            this.moveStop();
        };
        /**
         * @desc 图片边缘检测
         * @param top - 手指与图片的垂直移动距离
         * @param left - 手指与图片的水平移动距离
         */
        this.imageEdgeDetection = (top, left) => {
            const { cutBoxTop, cutBoxLeft, cutBoxWidth, cutBoxHeight, imageHeight, imageWidth, scale } = this.state;
            /* 计算缩放后的图片宽高差 */
            const differenceWidth = imageWidth * scale - imageWidth;
            const differenceHeight = imageHeight * scale - imageHeight;
            const imageTop = top > cutBoxTop ? cutBoxTop : (top + imageHeight * scale < cutBoxTop + cutBoxHeight) ? (cutBoxTop + cutBoxHeight) - imageHeight * scale : top;
            const imageLeft = left > cutBoxLeft ? cutBoxLeft : (left + imageWidth * scale < cutBoxLeft + cutBoxWidth) ? (cutBoxLeft + cutBoxWidth) - imageWidth * scale : left;
            this.setState({
                imageTop: imageTop + differenceHeight / 2,
                imageLeft: imageLeft + differenceWidth / 2,
            });
        };
        /**
         * @desc 停止移动
         */
        this.moveStop = () => {
            if (this.touchImageRelative.length === 2) {
                clearTimeout(this.setCenterTimer);
                this.setCenterTimer = setTimeout(this.setCenter, 1000);
            }
            this.touchImageRelative = [];
        };
        this.state = {
            canvasId: 'ag-image-cropper__image',
            imagePath: '',
            canvasImage: '',
            scale: 1,
            minScale: 1,
            originalImageWidth: 0,
            originalImageHeight: 0,
            imageWidth: 0,
            imageHeight: 0,
            imageLeft: 0,
            imageTop: 0,
            cutBoxWidth: 0,
            cutBoxHeight: 0,
            cutBoxTop: 0,
            cutBoxBottom: 0,
            cutBoxLeft: 0,
            cutBoxRight: 0,
            canvasWidth: 400,
            canvasHeight: 400
        };
    }
    async componentDidMount() {
        await this.init(this.props.imagePath ? this.props.imagePath : '');
    }
    render() {
        const { windowWidth } = this.systemInfo;
        const { canvasId, imagePath, scale, imageWidth, imageTop, imageLeft, imageHeight, cutBoxWidth, cutBoxHeight, cutBoxTop, cutBoxBottom, cutBoxLeft, cutBoxRight, } = this.state;
        const { className } = this.props;
        const rootClass = classNames('ag-image-cropper', className);
        const imageStyle = {
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
            top: `${imageTop}px`,
            left: `${imageLeft}px`,
            transform: `scale(${scale})`,
            transformOrigin: `center`
        };
        /* 裁剪框外层容器高度 */
        const contentCutWrapper = {
            height: `${cutBoxHeight}px`
        };
        /* 裁剪框样式 */
        const cutBoxStyle = {
            width: `${cutBoxWidth}px`,
            height: `${cutBoxHeight}px`,
        };
        /* 裁剪框顶部填充区月样式 */
        const contentTopFillStyle = {
            width: `${windowWidth}px`,
            height: `${cutBoxTop}px`,
            top: 0,
        };
        /* 裁剪框底部区域填充样式 */
        const contentBottomFillStyle = {
            width: `${windowWidth}px`,
            height: `${cutBoxBottom}px`,
            top: `${cutBoxTop + cutBoxHeight}px`
        };
        /* 裁剪框左侧区域填充样式 */
        const contentCutLeftFileStyle = {
            width: `${cutBoxLeft}px`,
            height: `${cutBoxHeight}px`,
            top: `${cutBoxTop}px`,
        };
        /* 裁剪框右侧区域填充样式 */
        const contentCutRightFileStyle = {
            width: `${cutBoxRight}px`,
            height: `${cutBoxHeight}px`,
            top: `${cutBoxTop}px`,
        };
        /* canvas画布样式 */
        const canvasStyle = {
            width: `${cutBoxWidth}px`,
            height: `${cutBoxHeight}px`,
            top: `-9999px`
        };
        return (React.createElement(View, { className: rootClass },
            React.createElement(View, { className: 'ag-image-cropper__main' },
                React.createElement(View, { className: 'ag-image-cropper__content' },
                    React.createElement(View, { className: 'ag-image-cropper__content-fill', style: contentTopFillStyle }),
                    React.createElement(View, { className: 'ag-image-cropper__content-cut-wrapper', style: contentCutWrapper },
                        React.createElement(View, { className: 'ag-image-cropper__content-cut-fill', style: contentCutLeftFileStyle }),
                        React.createElement(View, { className: 'ag-image-cropper__content-cut-box', style: cutBoxStyle, onClick: this.previewImage },
                            React.createElement(View, { className: "border border-top-left" }),
                            React.createElement(View, { className: "border border-top-right" }),
                            React.createElement(View, { className: "border border-right-top" }),
                            React.createElement(View, { className: "border border-right-bottom" }),
                            React.createElement(View, { className: "border border-bottom-right" }),
                            React.createElement(View, { className: "border border-bottom-left" }),
                            React.createElement(View, { className: "border border-left-bottom" }),
                            React.createElement(View, { className: "border border-left-top" })),
                        React.createElement(View, { className: 'ag-image-cropper__content-cut-fill', style: contentCutRightFileStyle })),
                    React.createElement(View, { className: 'ag-image-cropper__content-fill', style: contentBottomFillStyle })),
                React.createElement(Image, { className: 'ag-image-cropper__image', src: imagePath, style: imageStyle, onTouchStart: this.imageOnTouchStart, onTouchMove: this.imageOnTouchMove, onTouchEnd: this.imageOnTouchEnd })),
            React.createElement(Canvas, { canvasId: canvasId, className: 'ag-image-cropper__canvas', disableScroll: true, style: canvasStyle }),
            React.createElement(View, { className: 'ag-image-cropper__action' },
                React.createElement(View, { className: 'ag-image-cropper__mr-30', onClick: this.refresh },
                    React.createElement(Icon, { value: 'refresh', color: 'white', size: 36 })),
                React.createElement(View, { className: 'ag-image-cropper__mr-30', onClick: this.previewImage },
                    React.createElement(Icon, { value: 'preview', color: 'white', size: 36 })),
                React.createElement(View, { className: 'ag-image-cropper__mr-30', onClick: this.chooseImage },
                    React.createElement(Icon, { value: 'local-image', color: 'white', size: 36 })),
                React.createElement(View, { onClick: () => this.generateImage(true) },
                    React.createElement(Icon, { value: 'confirm', color: 'white', size: 36 })))));
    }
}
ImageCropper.defaultProps = {
    className: '',
    imagePath: '',
    size: '100%',
    success: (imagePath) => { }
};
ImageCropper.propTypes = {
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
//# sourceMappingURL=index.js.map