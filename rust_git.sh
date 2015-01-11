#!/bin/sh
rustdoc ../RustGit/src/rust_git.rs --html-in-header custom.css --output ./doc --crate-name rust_git
