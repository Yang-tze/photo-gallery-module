import React from 'react';
import { shallow } from 'enzyme';
import puppeteer from 'puppeteer';
import PhotoGalleryModule from '../../client/src/components/photo-gallery-module';
import MainImage from '../../client/src/components/main-image';
import ImageList from '../../client/src/components/image-list';

const port = process.env.PORT || 3002;
const pageUrl = `http://localhost:${port}`;

let page;
let browser;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});
afterAll(() => {
  browser.close();
});

//Testing Main Photo Gallery Component
describe('Photo Gallery', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  });

  it('renders correctly', async () => {
    expect(shallow(<PhotoGalleryModule/>).find('div.photo-gallery').exists()).toBe(true);
  });

  it('renders an image list', async () => {
    expect(shallow(<PhotoGalleryModule/>).find(ImageList).exists()).toBe(true);
  });

  it('renders a main image', async () => {
    expect(shallow(<PhotoGalleryModule/>).find(MainImage).exists()).toBe(true);
  });

});

//Testing Image List Component
describe('Image List', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  });

  it('renders correctly', async () => {
    expect(shallow(<ImageList/>).find('div.image-list').exists()).toBe(true);
  });
});

//Testing Main Image Component
describe('Main Image', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  });

  it('renders correctly', async () => {
    expect(shallow(<MainImage/>).find('div.main-image').exists()).toBe(true);
  });

  it('renders an image', async () => {
    expect(shallow(<MainImage/>).find('img').exists()).toBe(true);
  });
});
