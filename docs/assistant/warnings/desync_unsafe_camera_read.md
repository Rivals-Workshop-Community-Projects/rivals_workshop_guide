# `desync_unsafe_camera_read`

`view_get_xview` and `view_get_yview` can return different results for each player. If their value has any effect on the
gameplay logic, and can cause a desync during online play.

```gml
x = view_get_xview() // WARN: Possible Desync. Consider using get_instance_x(asset_get("camera_obj")).
```

## Resolution

`get_instance_x(asset_get("camera_obj"))` or `get_instance_y(asset_get("camera_obj"))` perform the same function with
sync safety.

If you prefer `view_get_xview` and are certain the code only has local aesthetic affects, suppress the warning
with `// NO-WARNING` or commenting it out in `assistant/assistant_config.yaml`
