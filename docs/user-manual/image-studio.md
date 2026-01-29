---
id: image-studio
title: Image Studio Guide
sidebar_label: Image Studio
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

Image Studio allows you to create artistic images or edit existing ones using artificial intelligence.

## 1. Image Studio Interface

The Image Studio interface is designed to be intuitive, making it easy to create images using just text commands.

<AnnotatedImage 
  src="/img/ui/image-studio/Image_Studio_UI.png" 
  alt="Image Studio UI"
  annotations={[
    { type: 'circle', x: '50%', y: '50%', size: '300px' }
  ]} 
/>

## 2. Creative Modes

You can choose to create entirely new images or edit based on an existing one.

<AnnotatedImage 
  src="/img/ui/image-studio/Select_mode_new_or_exsit_image.png" 
  alt="Select Mode"
  annotations={[
    { type: 'circle', x: '26.8%', y: '82.7%', size: '100px', label: 'Create from scratch' },
    { type: 'circle', x: '70%', y: '50%', size: '100px', label: 'Edit existing image' }
  ]}  
/>

### Create New
Enter a description for the image you want to create. You can select the image type (landscape, portrait, etc.) and your desired size.

![Choose Type](/img/ui/image-studio/Choose_type_image.png)
![Choose Size](/img/ui/image-studio/Choose_size_image.png)

### Adjust Image
Upload your image and enter commands for the AI to adjust it as desired.

![Upload and Adjust](/img/ui/image-studio/Uploaded_image_and_prompt_to_adjust.png)

## 3. Model Selection and Customization

You can scroll down to see a list of different image generation models and select the one that best fits the artistic style you're aiming for.

![Model List](/img/ui/image-studio/Scroll_to_see_and_choose_the_model.png)

## 4. Managing Generated Images (My Media)

In **My Media** mode, you can review all the images you've created, download them, or continue editing.

![Manage Media](/img/ui/image-studio/in_my_media_mode_can_click_image_aand_adjust_prompt_or_image.png)

---
**Back to:** [Introduction](/)

