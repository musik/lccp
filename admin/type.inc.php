<?php
/*
	[Destoon B2B System] Copyright (c) 2008-2013 Destoon.COM
	This is NOT a freeware, use is subject to license.txt
*/
defined('IN_DESTOON') or exit('Access Denied');
isset($item) or msg();
require DT_ROOT.'/include/type.class.php';
$forward = '?file='.$file.'&item='.$item;
$do = new dtype;
$do->item = $item;
$do->cache = 1;
if($submit) {
	$do->update($post);
	dmsg('更新成功', $forward);
} else {
	$lists = $do->get_list();
	include tpl('type');
}
?>