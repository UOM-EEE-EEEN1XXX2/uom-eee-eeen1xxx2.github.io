[![CC BY 4.0][cc-by-shield]][cc-by]

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg


Sphinx theming used a modified version of the [sphinx-wagtail-theme]: https://github.com/wagtail/sphinx-wagtail-theme, which is released, modified, and included here under an MIT license.

OpenDyslexic font is included from [OpenDyslexic]: https://opendyslexic.org/, which is released and included here under an SIL Open Font License v1.1.
ADD MONO
pygmentize -S default -f html -a .highlight > pygments.css
pygmentize -S monokai -f html -a .highlight > pygments-theme-dark.css

The below is a test.

.. code-block:: python
   :caption: lumache.py
   :emphasize-lines: 2

   def get_random_ingredients(kind=None):
       print()
       return ["shells", "gorgonzola", "parsley"]


.. role:: python(code)
   :language: python

This in incline code :python:`print()`. 

.. code-block:: python
   :caption: lumache.py
   :emphasize-lines: 2

   def get_random_ingredients(kind=None):
       print()
       return ["shells", "gorgonzola", "parsley"]

## TODO:
- Docker tagging
- Affiliate search
- READMEs for repos
- Move everything to pyproject.toml. There is now this for local, and requirements.txt for github! Update github action when canS