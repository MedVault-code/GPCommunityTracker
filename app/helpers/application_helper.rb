module ApplicationHelper
  def flash_class(level)
    case level
    when "notice"
      "alert alert-primary"
    when "success"
      "alert alert-primary"
    when "alert"
      "alert alert-danger"
    end
  end
end
