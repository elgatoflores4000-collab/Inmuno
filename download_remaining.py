import urllib.request
import os
import time

output_dir = r'C:\Users\elgat\Downloads\LIBROS\Hipersensibilidades\assets'

# Solo las que fallaron
cells = {
    'b_cell': 'https://upload.wikimedia.org/wikipedia/commons/3/35/202206_B_lymphocyte.svg',
    't_cell': 'https://upload.wikimedia.org/wikipedia/commons/1/12/202206_T_lymphocyte.svg',
    'plasma_cell': 'https://upload.wikimedia.org/wikipedia/commons/a/aa/202312_plasma_cell.svg',
    'antibody_ige': 'https://upload.wikimedia.org/wikipedia/commons/2/23/Antibody_%28NIH_BioArt_18_-_626865%29.svg',
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Academic/1.0'
}

for name, url in cells.items():
    output_path = os.path.join(output_dir, f'{name}.svg')
    if os.path.exists(output_path) and os.path.getsize(output_path) > 100:
        print(f"Ya existe {name}, saltando...")
        continue
    try:
        print(f"Descargando {name}...")
        time.sleep(3)  # Esperar entre descargas
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            data = response.read()
            with open(output_path, 'wb') as f:
                f.write(data)
        print(f"  OK Guardado: {output_path} ({len(data)} bytes)")
    except Exception as e:
        print(f"  ERROR descargando {name}: {e}")

print("Descarga completada!")
