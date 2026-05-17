import os
from rembg import remove
from PIL import Image
import glob

# Rutas de entrada y salida
input_paths = glob.glob(r'C:\Users\elgat\.gemini\antigravity\brain\e2e5017e-a6d9-4476-8691-f63195db2957\media__*.png')
output_dir = r'C:\Users\elgat\Downloads\LIBROS\Hipersensibilidades\assets'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for input_path in input_paths:
    filename = os.path.basename(input_path)
    # Prefix clean_ to distinguish
    output_path = os.path.join(output_dir, f'clean_{filename}')
    
    try:
        print(f"Procesando {filename}...")
        input_image = Image.open(input_path)
        output_image = remove(input_image)
        output_image.save(output_path)
        print(f"Guardado exitosamente: {output_path}")
    except Exception as e:
        print(f"Error procesando {filename}: {e}")

print("Procesamiento completado.")
