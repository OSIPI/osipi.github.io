{% for subgroup in include.subgroups %}

### {{ subgroup.name }}

{% if subgroup.leads %}
{:.list-title}

{% include taskforce/leads.html leads=subgroup.leads %}
{% endif %}

{% if subgroup.members %}
{:.list-title}

{% include taskforce/members.md members=subgroup.members %}
{% endif %}

{% for subsubgroup in subgroup.subsubgroups %}
**{{ subsubgroup.name }}**
{:.list-title}
{% include taskforce/members.md members=subsubgroup.members %}

{% endfor %}

{% endfor %}

