import React from 'react';
import { shallow, mount, render } from 'enzyme';
import puppeteer from 'puppeteer';
const port = process.env.PORT || 3002;
const pageUrl = `http://localhost:${port}`;
import App from './../../client/src/components/app';
import MainImage from './../../client/src/components/main-image';


let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});

// describe('Photo Gallery', () => {
//
// });

describe('Main Image', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  });

  it('renders correctly', async () => {
    expect(shallow(<MainImage/>).find('div.main-image').exists()).toBe(true);
  });

  it('renders an image', async () => {
    const wrapper = shallow(<MainImage/>);
    console.log('test');
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
