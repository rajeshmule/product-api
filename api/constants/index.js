module.exports = {
  defaultServerResponse: {
    status: 400,
    message: '',
    body: {},
  },
  productMessage: {
    PRODUCT_CREATED: 'Product Created Successfully.',
    PRODUCT_FETCHED: 'Product Fetched Successfully.',
    PRODUCT_NOT_FOUND: 'Product Not found.',
    PRODUCT_UPDATED: 'Product Updated Successfully.',
    PRODUCT_DELETED: 'Product Deleted Successfully.',
  },
  userMessage: {
    SIGNUP_SUCCESS: 'User Signup Successfully.',
    LOGIN_SUCCESS: 'User Login Successfully.',
    DUPLICATE_EMAIL: 'User alerady exist with given email.',
    USER_NOT_FOUND: 'User not found.',
    INVALID_PASSWORD: 'Incorrect password.',
  },
  databaseMessage: {
    INVALID_ID: 'Invlid Id.',
  },
  requestValidationMessage: {
    TOKEN_MISSING: 'Token missing from header.',
  },
}
