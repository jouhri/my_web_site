class HomeController < ApplicationController
  def index
  end

  def download
    send_file  "public/jouhri_oualid_cv_2014.pdf", :disposition => 'attachment'
  end

end
