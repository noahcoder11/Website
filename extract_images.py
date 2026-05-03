import fitz  # PyMuPDF
import os

# (pdf_path, page_num, out_path, rect (x0, y0, x1, y1))
files = [
    # Electronics: Page 5 (index 4) - bottom half showing the breadboard photo and schematic
    ("public/papers/Project Portfolio.pdf", 4, "public/project_images/electronics.png", fitz.Rect(50, 450, 562, 750)),
    
    # Facial Segmentation: Page 11 (index 10) - top half showing the grid of intermediate filter steps
    ("public/papers/Facial Segmentation in Images Final Report.pdf", 10, "public/project_images/facial.png", fitz.Rect(50, 100, 562, 450)),
    
    # Neural ODE: Page 9 (index 8) - nearly the full slide to ensure graphs aren't cut off
    ("public/papers/Neural_ODE_Presentation.pdf", 8, "public/project_images/neural.png", fitz.Rect(50, 50, 800, 600)),
    
    # Proof: Page 3 (index 2) - top half showing the start of Theorem 1 and the calculus formulas
    ("public/papers/Proof Portfolio.pdf", 2, "public/project_images/proof.png", fitz.Rect(50, 80, 562, 350)),
    
    # Facial Recognition PCA: Page 9 (index 8) - showing results or eigenfaces
    ("public/papers/Facial Recognition PCA Report.pdf", 8, "public/project_images/pca_recognition.png", fitz.Rect(50, 100, 562, 500))
]

for pdf_path, page_num, out_path, rect in files:
    if os.path.exists(pdf_path):
        doc = fitz.open(pdf_path)
        if page_num < len(doc):
            page = doc.load_page(page_num)
            
            # Ensure the rectangle doesn't exceed the actual page dimensions
            clip_rect = page.rect.intersect(rect)
            
            # Use a higher DPI to make the smaller cropped sections look crisp
            pix = page.get_pixmap(dpi=300, clip=clip_rect)
            pix.save(out_path)
            print(f"Saved cropped {out_path}")
        else:
            print(f"Page {page_num} not found in {pdf_path}")
        doc.close()
    else:
        print(f"File not found: {pdf_path}")
