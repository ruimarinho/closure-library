# Closure Library

A very close fork to the upstream [Google Closure Library](https://github.com/google/closure-library) but tested with our own modules and repackaged for npm.

Originally based on Medium's [fork](https://github.com/Medium/closure-library).

## Updating dependencies

The `master` branch if currently being rebased with the upstream.

```bash
git remote add upstream git@github.com:google/closure-library
git fetch upstream
git rebase upstream/master
```

# Credits

The updating instructions contained in this README and the `postinstall` script to remove test and demo files were originally created by Medium.
