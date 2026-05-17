import fitz
import os
import re

pdf_files = [f for f in os.listdir('.') if f.endswith('.pdf')]
keywords = ["ILC2", "Th2", "alarmina", "TSLP", "IL-33", "IL-25", "GATA-3", "dendrítica", "folículo", "paracorteza"]

print(f"Found {len(pdf_files)} PDF files.")

results = []

for pdf_file in pdf_files:
    print(f"Processing {pdf_file}...")
    try:
        doc = fitz.open(pdf_file)
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            text = page.get_text()
            
            # Simple keyword matching line by line
            lines = text.split('\n')
            for i, line in enumerate(lines):
                if any(kw.lower() in line.lower() for kw in keywords):
                    # grab surrounding lines for context
                    start = max(0, i - 2)
                    end = min(len(lines), i + 3)
                    context = " ".join([l.strip() for l in lines[start:end]])
                    # Check if it has a high density of relevant terms or is specifically about hypersensitivity/allergy
                    if "hipersensibilidad" in context.lower() or "alergia" in context.lower() or "asma" in context.lower() or "tipo i" in context.lower() or "tipo 1" in context.lower():
                        results.append(f"[{pdf_file} - Page {page_num+1}] {context}")
        doc.close()
    except Exception as e:
        print(f"Error processing {pdf_file}: {e}")

with open('pdf_search_results.txt', 'w', encoding='utf-8') as f:
    for res in results:
        f.write(res + "\n")
print("Search complete. Results written to pdf_search_results.txt.")
