/* eslint-disable @typescript-eslint/no-unused-vars */
import { FilterOperator } from "./FilterOperator";
import { FilterOperatorKeyof } from "./FilterOperatorKeyof";

/* 1 - Filter operator without keyof */

const gtFilter = FilterOperator.fromValue("GT");

const invalidFilter = FilterOperator.fromValue("INVALID_FILTER");

/* 2 - Filter operator with keyof */

const ltFilter = FilterOperatorKeyof.fromValue("LT");

// @ts-expect-error INVALID_FILTER can not be used because is not a key of Operator
const imposibleInvalidFilter = FilterOperatorKeyof.fromValue("INVALID_FILTER");
