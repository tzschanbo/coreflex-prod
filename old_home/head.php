<?
   session_start();
   $Dir_name="nayaboard";
   $Dir_path="../../";
   $logingroup="1";
   $loginskin="basic";
?>

<html>
	<head>
		<title>나야보드</title>
		<meta http-equiv="imagetoolbar" content="no">
		<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
		<link rel="stylesheet" type="text/css" href="<?=$Dir_path.$Dir_name?>/class/css/style.css">
	</head>
	<body topmargin="0" leftmargin="0" marginheight="0" marginwidth="0">
		<table width="942" height="700" border="1" cellspacing="0" bordercolordark="#FFFFFF" bordercolorlight="#CCCCCC" align="center">
			<tr height="40">
				<td width="222" bgcolor="#E7E7E7" align="center"><b>나야보드 VER. PHP</b></td>
			<td width="120" bgcolor="#E7E7E7" align="center">메뉴1</td>
				<td width="120" bgcolor="#E7E7E7" align="center">메뉴2</td>
				<td width="120" bgcolor="#E7E7E7" align="center">메뉴3</td>
				<td width="120" bgcolor="#E7E7E7" align="center">메뉴4</td>
				<td width="120" bgcolor="#E7E7E7" align="center">메뉴5</td>
				<td width="120" bgcolor="#E7E7E7" align="center">메뉴6</td>
			</tr>
			<tr>
				<td width="222" align="center" valign="top" style="padding:5 5 0 5">
				<? include $Dir_path.$Dir_name."/out_login.php"?>
				</td>
				<td colspan="6" valign="top" style="padding:10 10 10 10">
					<table width="720" border="0" cellpadding="0" cellspacing="0"><tr><td>
					