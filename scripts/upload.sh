#!/bin/bash
# SFTP配置信息
# IP
IP=49.234.98.192
# 端口  
PORT=22
# 用户名
USER=root
# 密码
PASSWORD=Wa1107238436.
# 需要上传的文件名
FILE=*
# 需要上传的文件所在目录
CLIENTDIR1=/Users/js/study/yyt-helper/dist

# 上传到目标服务器的目录
SEVERDIR1=/root/zengqinglong/bfr-utils


lftp -u ${USER},${PASSWORD} sftp://${IP}:${PORT} <<EOF
cd ${SEVERDIR1}/
lcd ${CLIENTDIR1}
echo '成功链接到服务器,准备开始上传'
mirror -R ${CLIENTDIR1} ${SEVERDIR1}
echo '成功上传到服务器' ${SEVERDIR1}

bye
EOF

