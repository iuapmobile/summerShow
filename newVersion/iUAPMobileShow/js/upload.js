 
$(function () {
    $('.um-header-personal').on('click', function () {
        UM.actionsheet({
            title: '选择照片',
            items: ['拍照上传', '本地上传'],
            callbacks: [function () {
                $camera.open({
                    callback : function(args){
                    	$alert(args);
                        //
                        //$('.um-header-personal .um-circle').attr('src',args.imgPath);
                        $('.um-header-personal .user-name').text('思战');	                        
	                        var params = {};
							summer.upload({
								fileURL : args.imgPath,
								type : "image/jpeg",
								params : params,
								SERVER : "http://123.103.9.206:7100/UpdateApp/file/upload"
							},function (ret){
								alert("上传成功"+ JSON.stringify(ret));
								var fileName=args.imgPath.substr(args.imgPath.lastIndexOf('/')+1);
								//alert(fileName);
								$('.um-header-personal .um-circle').attr('src','http://172.20.7.97:8080/UpdateApp/upload/'+fileName);		
							},function(err){
								alert("失败"+ JSON.stringify(err));
							});
                        
                         
                        
                    }
                });
            }, function () {
                $camera.openPhotoAlbum(
                    {
                        callback: function (args) {
                            //$('.um-header-personal .um-circle').attr('src',args.imgPath);
                            $('.um-header-personal .user-name').text('思战');
                            //$('.um-header-personal .um-circle').attr('src','http://123.103.9.206:7100/UpdateApp/upload/a.jpg');
                            var params = {};
							summer.upload({
								fileURL : args.imgPath,
								type : "image/jpeg",
								params : params,
								SERVER : "http://123.103.9.206:7100/UpdateApp/file/upload"
							},function (ret){
								alert("上传成功"+ JSON.stringify(ret));
								var fileName=args.imgPath.substr(args.imgPath.lastIndexOf('/')+1);
								//alert(fileName);
								$('.um-header-personal .um-circle').attr('src','http://172.20.7.97:8080/UpdateApp/upload/'+fileName);
								
							},function(err){
								alert("失败"+ JSON.stringify(err));
							});
                            
                        }
                    }
                )
            }]
        });
    })
})