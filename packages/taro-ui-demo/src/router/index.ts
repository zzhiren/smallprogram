import Router from '@agent/taro-router';

export default new Router([
  {
    url: 'pages/basic/icon/index',
    name: 'Icon',
    meta: {
      title: '图标'
    }
  },
  {
    url: 'pages/basic/cropper/index',
    name: 'Cropper',
    meta: {
      title: '图片剪裁'
    }
  },
  {
    url: 'pages/basic/image-cropper/index',
    name: 'ImageCropper',
    meta: {
      title: '新版图片剪裁'
    }
  },
  /* form */
  {
    url: 'pages/form/file-picker/index',
    name: 'FilePicker',
    meta: {
      title: '文件选取'
    }
  },
  {
    url: 'pages/form/input/index',
    name: 'Input',
    meta: {
      title: '输入框'
    }
  },

  {
    url: 'pages/router/index',
    name: 'router',
    meta: {
      title: '路由'
    }
  }
]);
