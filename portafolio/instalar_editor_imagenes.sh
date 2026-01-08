#!/bin/bash

set -e

echo "Actualizando repositorios..."
sudo apt update

echo "Instalando GIMP..."
sudo apt install -y gimp xdg-utils

echo "Configurando GIMP como editor predeterminado..."

xdg-mime default gimp.desktop image/jpeg
xdg-mime default gimp.desktop image/png
xdg-mime default gimp.desktop image/gif
xdg-mime default gimp.desktop image/webp

echo "Verificando configuración..."
xdg-mime query default image/jpeg
xdg-mime query default image/png

echo "Proceso completado ✅"

