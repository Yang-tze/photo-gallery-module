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
describe('Test', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  });

  it('test correctly', async () => {
    expect(true).toBe(true);
  });

});
