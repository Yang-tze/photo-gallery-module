# Photo Gallery

  > Simple photo gallery for a given product.

## Related Projects
  * [review-module](https://github.com/Viamis/review-module)
  * [similar-products](https://github.com/Viamis/similar-products)
  * [amazon-service-tk](https://github.com/Viamis/amazon-service-tk)

## Table of Contents

  1. [Usage](#Usage)
  1. [Requirements](#requirements)
  1. [Development](#development)

## Usage

  > Some usage instructions

## Requirements

  An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

    - Node 6.13.0
    - etc

## Development

  ### Installing Dependencies

  From within the root directory:
  
    npm install

## CRUD API

  Post new product info
  ```
  app.post('/images/add_product')
  
  ```
  Get images 
  ```
  app.get('/images/:id/images')
  
  ```
  Get product info
  ```
  app.get('/images/:id/product_info')
  
  ```
  Update product info
  ```
  app.put('/images/update_product')
  
  ```
  Delete product info/image
  ```
  app.delete('/images/delete_product')
  
  ```
