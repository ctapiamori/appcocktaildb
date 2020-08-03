import { ImagePreviewPipe } from './image-preview.pipe';

describe('ImagePreviewPipe', () => {
  it('should transform an url preview', () => {
    const url = 'https://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg';
    const pipe = new ImagePreviewPipe();
    expect(pipe.transform(url)).toEqual(`${url}/preview`);
  });
});
