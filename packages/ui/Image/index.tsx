import * as React from 'react';

import { Image as AntdImage, ImageProps } from 'antd';

const Image: React.FC<ImageProps> = (props) => <AntdImage preview={false} {...props} />;

export default Image;
