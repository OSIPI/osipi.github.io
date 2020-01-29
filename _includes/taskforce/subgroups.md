{% for subgroup in include.subgroups %}

### {{ subgroup.name }}

**Task force leads**

{% include taskforce/leads.md leads=subgroup.leads %}

**Task force members**

{% include taskforce/members.md members=subgroup.members %}

{% endfor %}

