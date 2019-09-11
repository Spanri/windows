from ftplib import FTP
import os.path as op

file_path = op.join(op.dirname(__file__), './dist/static')

ftp = FTP()
HOST = '91.238.69.56'
PORT = 21
ftp.connect(HOST, PORT)

print(ftp.login())

# Меняем директорию
ftp.cwd('docs')

# Скачать с сервера
# out = file_path + '/1.pdf'
# with open(out, 'wb') as f:
#     ftp.retrbinary('RETR ' + '1.pdf', f.write)

# Читать список файлов
# data = ftp.retrlines('LIST')
# print(data)

def ftp_upload(ftp_obj, path, title, ftype='TXT'):
    """
    Загрузить на FTP-сервер
    @param ftp_obj: Объект протокола передачи файлов
    @param path: Путь к файлу для загрузки
    """
    if ftype == 'TXT':
        with open(path) as fobj:
            ftp.storlines('STOR ' + title, fobj)
    else:
        with open(path, 'rb') as fobj:
            ftp.storbinary('STOR ' + title, fobj, 1024)


path = file_path + '/1.pdf'
ftp_upload(ftp, path, '1.pdf', ftype='PDF')


# ftp.quit()

# app_root = os.path.dirname(os.path.abspath(__file__))
# # Add the file name you want to upload
# file_path = os.path.join(app_root, 'test.txt')
# strip_path = file_path.rstrip(os.sep)
# fp_path = os.path.basename(strip_path)

# # Upload command
# ftp.ftp_obj.upload_file(fp_path)
# print(ftp.ftp_obj.get_message())
