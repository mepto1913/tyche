from django import template

register = template.Library()

@register.simple_tag
def map_message_lottie(tag):
    if tag == "error":
        return '/assets/lottie/error.json'
    elif tag == "info":
        return '/assets/lottie/alertCircle.json'
    elif tag == "warning":
        return '/assets/lottie/alertTriangle.json'
    elif tag == "success":
        return '/assets/lottie/checkmark.json'
    return 'primary'