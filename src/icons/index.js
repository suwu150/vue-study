// 图标自动加载
import Vue from 'vue';
import SvgIcon from '';
const req = require.context('./svg', false, /\.svg$/);

req.keys().map(req);
