import zipfile, xml.etree.ElementTree as ET, os
path = r'c:\laragon\www\phu-xuan-react\HuongDanThucHanh_Buoi1.docx'
print('exists:', os.path.exists(path))
with zipfile.ZipFile(path) as z:
    print('files:', z.namelist())
    xml = z.read('word/document.xml')
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
root = ET.fromstring(xml)
texts = []
for p in root.findall('.//w:p', ns):
    s = ''.join(node.text or '' for node in p.findall('.//w:t', ns))
    if s.strip():
        texts.append(s)
for i, s in enumerate(texts[:500], 1):
    print(f'{i}: {s}')
