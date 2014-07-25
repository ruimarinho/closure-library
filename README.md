# Closure Library

This is Seegno's fork of [Obvious' fork](https://github.com/Medium/closure-library) of [Google Closure Library](https://github.com/google/closure-library). Likewise, this is a rebased version of the upstream `closure-library` repository published to npm.
The updating instructions contained in this README and the `postinstall` script to remove test and demo files were created by Obvious.

The main difference of this fork is that it is compatible with node 0.11 due to the introduction of a small patch for Closure's node.js wrapper.

## Updating dependencies

### Merging from the main project

The `pristine` branch contains only changes that we've pulled from the main repo.

The `master` branch should always contain main repo changes, with our changes layered on top.

To sync changes from the main project, run the following:

```
# Sync changes from code.google.com
git clone git@github.com:Obvious/closure-library
cd closure-library
git remote add google git@github.com:google/closure-library
git fetch google
git checkout pristine
git merge google/master
git push origin pristine

# Layer our changes on top
git checkout master
git rebase pristine master
```
