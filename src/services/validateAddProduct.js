import { ERRORS as ERROR } from "../constants/errors";

export default function validateAddProduct(values) {
  let errors = {};

  if (!values.name) errors.name = ERROR.PRODUCT_NAME_REQ;

  if (!values.price) errors.price = ERROR.PRICE_REQ;
  else if (!Number.isFinite(values.price)) errors.price = ERROR.PRICE_INVALID;

  if (!values.stock) errors.stock = ERROR.STOCK_REQ;
  else if (!Number.isFinite(values.stock)) errors.stock = ERROR.STOCK_INVALID;

  if (!values.shortDesc) errors.shortDesc = ERROR.SHORT_DESC_REQ;

  if (!values.description) errors.description = ERROR.DESC_REQ;

  return errors;
}
