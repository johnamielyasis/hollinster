/**
 * @jest-environment jsdom
 */
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Large from '../../components/overview/ImgGallery/Large.jsx';
import sampleData from '../../components/overview/sampleData.js';

describe('Right Arrow', () => {
  test('Right Arrow changes image after click', () => {
    const LargeComp = render(<Large defaultStyle={sampleData.results[0]} />);
    const rightArrow = LargeComp.getByTestId('rightArrowImgGallery');
    const currentImage = LargeComp.getByAltText(sampleData.results[0].name);
    const previousImgSrc = currentImage.src;

    fireEvent.click(rightArrow);
    expect(currentImage.src).not.toBe(previousImgSrc);
  });

  test('Right Arrow does not change image when at last image', () => {
    const LargeComp = render(<Large defaultStyle={sampleData.results[0]} />);
    const rightArrow = LargeComp.getByTestId('rightArrowImgGallery');
    const currentImage = LargeComp.getByAltText(sampleData.results[0].name);

    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);

    const previousImgSrc = currentImage.src;
    fireEvent.click(rightArrow);

    expect(currentImage.src).toBe(previousImgSrc);
  });

});