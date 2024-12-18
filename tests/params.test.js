import test from "test-curried";
import { obj2qs, to_uri } from "../utils/params.js";

test("empty object", (t) => {
  t.is(to_uri({}), "");
  t.is(to_uri(""), "");
  t.is(to_uri([]), "");
});

test("boolean values", (t) => {
  t.is(to_uri({ a: true }), "?a=true");
  t.is(to_uri({ a: true, b: 1 }), "?a=true&b=1");
});

test("array values", (t) => {
  t.is(to_uri({ a: ["b", "C"] }), '?a=["b","C"]');
  t.is(to_uri({ a: ["b", "C"], b: 1 }), '?a=["b","C"]&b=1');
});
