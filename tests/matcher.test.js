import { rm_begin, rm_begin_str, rm_begin_array } from "../utils/matcher.js";
import test from "test-curried";

test("removes begin of string", (t) => {
  t.is(rm_begin_str("a")("abc"), "bc");
  t.is(
    rm_begin_str("https://api1.binance.com")(
      "https://api1.binance.com/api/v3/time"
    ),
    "/api/v3/time"
  );
});

test("returns undefined if begin string is not part", (t) => {
  t.is(rm_begin_str("b")("abc"), undefined);
});

test("removes begin of string from array", (t) => {
  t.is(rm_begin_array(["a", "b"])("abc"), "bc");
});

test("returns undefined if no begin string in array", (t) => {
  t.is(rm_begin_array(["b", "c"])("abc"), undefined);
});

test("rm_begin works for both string and array", (t) => {
  t.is(rm_begin("a")("abc"), "bc");
  t.is(rm_begin(["a", "ab"])("abc"), "bc");
});
