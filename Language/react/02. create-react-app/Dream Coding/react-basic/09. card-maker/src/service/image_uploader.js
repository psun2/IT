class ImageUploader {
  async upload(file) {
    const url = 'https://api.cloudinary.com/v1_1/demo/image/upload';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'docs_upload_example_us_preset');

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    console.log(response);

    return await response.json();
  }
}

export default ImageUploader;
