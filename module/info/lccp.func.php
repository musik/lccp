<?php
function human_kind($key){
  $vars = array(2=>'保本固定收益',1=>'保本浮动收益',0=>'非保本');
  return $vars[$key];
}
function human_risk($key){
  $vars = array(1=>'保守',3=>'平衡',0=>'进取');
  return empty($vars[$key]) ? '--' :  $vars[$key];
}
function human_currency($key){
  $vars = array(1=>'人民币',2=>'美元',3=>'其它');
  return empty($vars[$key]) ? '--' :  $vars[$key];
}
function human_cat($cat_id){
  global $maincat;
  foreach($maincat as $v){
    if($v['catid'] == $cat_id){
      $cat = $v;
      break;
    }
  }
  if($cat)
    return "<a href='$cat[linkurl]' class='bank'>$cat[catname]</a>";
}
