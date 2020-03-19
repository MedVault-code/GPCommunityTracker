module EmailHelper
  include ApplicationHelper
  def public_image_url_for_email(image_filename)
    root = ApplicationHelper.domain_root
    root + "/images/" + image_filename
  end
end
