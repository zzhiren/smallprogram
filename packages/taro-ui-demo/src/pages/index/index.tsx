import React from 'react';
import { View } from '@tarojs/components';
import $router from '../../router';

const list = [
  /* basic */
  {
    url: 'pages/basic/icon/index',
    name: 'Icon'
  },
  {
    url: 'pages/basic/cropper/index',
    name: 'Cropper'
  },
  {
    url: 'pages/basic/image-cropper/index',
    name: 'ImageCropper'
  },
  /* form */
  {
    url: 'pages/form/file-picker/index',
    name: 'FilePicker'
  },
  {
    url: 'pages/form/input/index',
    name: 'Input'
  },

  {
    url: 'pages/router/index',
    name: 'router'
  }
];

export default class Index extends React.Component {
  private static async routerTo (url: string) {
    console.log('$router', $router);
    await $router.push({
      url: url,
      query: {
        a: 100,
        b: 'aaa'
      }
    });
    console.log($router.route);
  }

  public render (): JSX.Element {
    return (
      <View className="index">
        {
          list.map(v => (
            <View onClick={() => Index.routerTo(v.url)} key={v.url}>{v.name}</View>
          ))
        }
      </View>
    );
  }
}
