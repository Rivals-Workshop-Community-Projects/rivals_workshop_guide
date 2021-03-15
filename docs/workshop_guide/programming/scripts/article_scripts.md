# Article Scripts

Used to give behavior to your [articles](../language/articles.md).

Article scripts are named for the article they represent, in the format `article<index>_init.gml`
or `article<index>_update.gml`.

Article names are `1`, `2`, `3`, `solid`, and `platform`

## article<index>_init.gml

Called when the article is created.

Initializes variables for use in 

```gml
should_die = false
```

## article<index>_update.gml

Called every frame for the article. Used to add behavior.

Articles do not have event scripts like `got_hit.gml` or `death.gml`, but these events can be detected manually.

::: construction

Explain how. Support with the injection framework.

:::

```gml
if should_die {
    instance_destroy(self)
}
```