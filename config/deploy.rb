set :application, "lccp"
set :repository,  "git@github.com:musik/lccp.git"
set :scm, :git
set :deploy_to, "/home/muzik/955871"
ssh_options[:forward_agent] = true
set :branch, "master"
set :deploy_via, :remote_cache


# set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

role :web, "lrt"                          # Your HTTP server, Apache/etc
role :app, "lrt"                          # This may be the same as your `Web` server
role :db,  "lrt", :primary => true # This is where Rails migrations will run

after "deploy:restart", "deploy:cleanup"
set :shared_children, [
          "file",
          #"config.inc.php",
          "about",
          "announce"
    ]
set :group_writable,true
set :use_sudo, false

set :user, "muzik"
set :group, "www-data"
after "deploy:setup","app:setup"
after "deploy:finalize_update","app:symlink"

namespace :app do
  task :install do
    upload "install/index.php.example","#{current_path}/install/index.php"
    upload "install/table.sql","#{current_path}/install/table.sql"
    upload "install/data.sql","#{current_path}/install/data.sql"
    upload "install/config.inc.php.example","#{current_path}/config.inc.php"
  end
  task :remove do
    run "rm -f #{shared_path}/file/cache/install.lock"
    upload "install/index.php.example","#{current_path}/install/index.php"
  end
  task :file do
    #tmp = user
    #set :user,'root'
    #run "chown -R #{tmp}:#{group} #{shared_path}/file/"
    #run "chmod -R 775 #{shared_path}/file/"
    #set :user,tmp
    #upload "file","#{shared_path}/file/"
    run_locally "rsync -avzP file lrt:#{shared_path}/ --exclude=session"
  end
  task :setup do
  end
  task :symlink do
    #tmp = user
    #set :user,'root'
    #run "chown -R #{tmp}:#{group} #{latest_release}"
    #if previous_release
      #["config.inc.php"].each do |file|
        #run "if [ -f '#{previous_release}/#{file}' ]; then cp #{previous_release}/#{file} #{latest_release}/#{file}; fi;"
      #end
    #end
    run "ln -s #{shared_path}/config.inc.php #{latest_release}/config.inc.php"
  end
  task :rewrite do
    set :user,'root'
    upload './config/nginx.dir.conf','/etc/nginx/global/dir.conf'
    run "service nginx reload"
  end
end
