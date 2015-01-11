#!/bin/sh
rustdoc ../comp_sci.rs/src/lib.rs --html-in-header custom.css --output ./doc --crate-name comp_sci
