﻿using Application.Tree.Common;
using ErrorOr;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tree.Queries.List
{
    public record ListTreeQuery() : IRequest<ErrorOr<List<TreeResult>>>;
}
