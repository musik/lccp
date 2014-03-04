<?php
defined('IN_DESTOON') or exit('Access Denied');
#Your Functions
//hacked begin get_cat_by_dir
function get_cat_by_dir($catdir,$moduleid) {
	global $db;
	return $db->get_one("SELECT * FROM {$db->pre}category WHERE moduleid = $moduleid and catdir='$catdir'");
}
?>
