import urllib.request
import os

output_dir = r'C:\Users\elgat\Downloads\LIBROS\Hipersensibilidades\assets'

# Mapa de células -> URLs directas de Wikimedia (NIH BioArt + otros)
cells = {
    'mast_cell': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Mast_Cell_%28NIH_BioArt_336_-_631990%29.svg',
    'dendritic_cell': 'https://upload.wikimedia.org/wikipedia/commons/4/46/Dendritic_Cell_%28NIH_BioArt_112_-_628886%29.svg',
    'eosinophil': 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Eosinophil_%28NIH_BioArt_140_-_629554%29.svg',
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
    try:
        print(f"Descargando {name}...")
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            data = response.read()
            with open(output_path, 'wb') as f:
                f.write(data)
        print(f"  OK Guardado: {output_path} ({len(data)} bytes)")
    except Exception as e:
        print(f"  ERROR descargando {name}: {e}")

print("\n¡Descarga completada!")
