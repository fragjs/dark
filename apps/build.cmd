@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\tools\builder\build.js" %*
) ELSE (
  node  "%~dp0\tools\builder\build.js" %*
)