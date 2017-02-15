#!/usr/bin/env bash

echo "[installer] Installing hooks"
bash $PWD/bin/install-git-hooks.sh

cat <<EOF
[installer] Completed!

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!                                                    !!
!!           You're all set and ready to go.          !!
!!                                                    !!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Happy Coding!

EOF
