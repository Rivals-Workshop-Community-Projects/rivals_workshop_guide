# Troubleshooting

This is a searchable list of error messages, and common fixes.

::: construction

Find common error messages, give an example, and common fixes for them.

:::

- `<instance id> (<object>) does not have variable '<variable name>'`
- `Expected a statement, got <character>`
- `Type check failure for argument <argument num>: Expected a <correct type>`
  `print`
  the [typeof](https://docs.yoyogames.com/source/dadiospice/002_reference/001_gml%20language%20overview/typeof.html)
  variables to help you find if you're using `"3"` when you want `3` or something.
  See [data types](../learning_path/data_types.md).

#### `Couldn't find instance <instance id>`

You're probably running code on a destroyed article.

See [destroying articles safely.](../learning_path/articles.md#safely)
