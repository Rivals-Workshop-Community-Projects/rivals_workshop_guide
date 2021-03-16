# Article Scripts

Used to give behavior to your [articles](../language/articles.md).

Article scripts are named for the article they represent, in the format `article<name>_init.gml`
or `article<name>_update.gml`.

Article names are `1`, `2`, `3`, `solid`, and `platform`

[Official docs](https://rivalsofaether.com/articles/)

## article[name]_init.gml

Called when the article is created, to initialize variables.

Articles have several [built-in variables.](../language/articles.md#article-variables)

An article's `sprite_index` variable *must* be set to a valid sprite, or the game may crash. If you need an invisible
article, you can get around this with `sprite_index = asset_get("empty_sprite")`.

In all scripts, should avoid using Game Maker's in-built 'speed' variables
(including `image_speed`, `gravity`, `friction`, `hspeed` and `vspeed`). These variables are not synced with Rivals of
Aether's framerate, and may cause desyncs online. Use `hsp` and `vsp` instead for movement. Articles do not have
in-built replacements for `image_speed`, `gravity` and `friction`, so this behavior needs to be defined manually.

```gml
article_anim_speed = 0.2;
article_friction = 0.1;
article_gravity = 0.5;
article_max_fall_speed = 12;

should_die = false
```

## article[name]_update.gml

Called every frame for the article. Used to add behavior.

Articles do not have event scripts like `got_hit.gml` or `death.gml`, but these events can be detected manually.

::: construction

Explain how. Support with the injection framework.

:::

```gml
image_index += article_anim_speed;

if free {
    vsp = min(vsp + article_gravity, article_max_fall_speed)
}
if hsp != 0 {
    hsp = sign(hsp) * max(0, abs(hsp) - my_article_friction)
}

if should_die {
    instance_destroy()
}
```