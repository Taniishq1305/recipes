import datetime

from django.conf import settings

from allauth.account.adapter import DefaultAccountAdapter
from django.contrib import messages
from django.core.cache import caches
from gettext import gettext as _


class AllAuthCustomAdapter(DefaultAccountAdapter):

    def is_open_for_signup(self, request):
        """
        Whether to allow sign ups.
        """
        if request.resolver_match.view_name == 'account_signup' and not settings.ENABLE_SIGNUP:
            return False
        else:
            return super(AllAuthCustomAdapter, self).is_open_for_signup(request)

    # disable password reset for now
    def send_mail(self, template_prefix, email, context):
        if settings.EMAIL_HOST != '':
            default = datetime.datetime.now()
            c = caches['default'].get_or_set(email, default, timeout=360)
            if c == default:
                super(AllAuthCustomAdapter, self).send_mail(template_prefix, email, context)
            else:
                messages.add_message(self.request, messages.ERROR, _('In order to prevent spam, the requested email was not send. Please wait a few minutes and try again.'))
        else:
            pass
