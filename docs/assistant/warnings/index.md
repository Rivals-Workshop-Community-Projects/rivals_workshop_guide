# Warnings

When the Assistant finds a pattern of code known to be problematic, it will provide a warning comment to let you know.

## False Alarms

The Assistant may warn you about code that you know to work. In these situations you can:

- Change the code to be safe anyway, just as good practice.
- Write a `//NO-WARN` comment on the line of the warning to suppress that line.
- Comment out the warning type in your `assistant/assitant_config.yaml` file, to stop the warning everywhere.

If you're finding a warning to be badly inaccurate or irritating, please let me know.