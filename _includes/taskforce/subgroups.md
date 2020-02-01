{% for subgroup in include.subgroups %}

### {{ subgroup.name }}

{:.list-title}
**Task force leads**

{% include taskforce/leads.html leads=subgroup.leads %}

{:.list-title}
**Task force members**

{% include taskforce/members.md members=subgroup.members %}

{% endfor %}

