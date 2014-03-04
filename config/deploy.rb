set :application, "lccp"
set :repository,  "git@github.com:musik/lccp.git"
set :scm, :git
set :deploy_to, "/home/muzik/www/955871"
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
          #"data/compile",
          #"data/log",
          #"data/dbbak",
          "data/static",
          "uploads/article",
          "uploads/static",
          "uploads/website"]
set :group_writable,true
set :use_sudo, false

set :user, "muzik"
set :group, "www-data"
after "deploy:setup","app:setup"
after "deploy:finalize_update","app:symlink"
after "deploy:finalize_update","app:robot"

namespace :app do
  task :setup do
    upload './config.php', "#{shared_path}/"
    upload './data/static', "#{shared_path}/", :via=> :scp, :recursive => true
    run "chmod 775 #{shared_path}/config.php"
  end
  task :symlink do
    tmp = user
    set :user,'root'
    run "chown -R #{tmp}:#{group} #{latest_release}"
    if previous_release
      ["data/install.lock"].each do |file|
        run "if [ -f '#{previous_release}/#{file}' ]; then cp #{previous_release}/#{file} #{latest_release}/#{file}; fi;"
      end
    end
    run "ln -s #{shared_path}/config.php #{latest_release}/config.php" 
    run "touch #{shared_path}/robot.log"
    run "chown #{tmp}:#{group} #{shared_path}/robot.log"
    run "ln -s #{shared_path}/robot.log #{latest_release}/robot.log"
  end
  task :remove do
    ["config.php","data/install.lock"].each do |file|
      run "rm -f #{latest_release}/#{file}"
    end
    run "ln -s #{shared_path}/config.php #{latest_release}/config.php" 
  end
  task :rewrite do
    set :user,'root'
    upload './config/nginx.dir.conf','/etc/nginx/global/dir.conf'
    run "service nginx reload"
  end
  task :robot do
    run "chmod +x #{current_path}/robot"
  end
end
